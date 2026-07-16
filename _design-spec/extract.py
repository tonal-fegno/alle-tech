import re
from html.parser import HTMLParser
import json

class FramerHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.sections = []
        self.current_section = None
        self.current_text = []
        self.images = []
        self.links = []
        self.styles = []
        self.in_style = False
        
    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        
        # Capture sections
        if 'data-framer-name' in attrs_dict:
            name = attrs_dict['data-framer-name']
            if 'Section' in name:
                self.current_section = {
                    'name': name,
                    'content': [],
                    'images': [],
                    'styles': attrs_dict.get('style', '')
                }
        
        # Capture images
        if tag == 'img' and 'src' in attrs_dict:
            src = attrs_dict['src']
            if 'framerusercontent.com' in src:
                # Remove query params
                src = src.split('?')[0]
                self.images.append({
                    'src': src,
                    'alt': attrs_dict.get('alt', ''),
                    'section': self.current_section['name'] if self.current_section else 'Unknown'
                })
                if self.current_section:
                    self.current_section['images'].append(src)
        
        # Capture links
        if tag == 'a' and 'href' in attrs_dict:
            self.links.append({
                'href': attrs_dict['href'],
                'section': self.current_section['name'] if self.current_section else 'Unknown'
            })
        
        # Check for background images in style
        if 'style' in attrs_dict:
            style = attrs_dict['style']
            bg_match = re.search(r'background-image:\s*url\(["\']?([^"\')]+)["\']?\)', style)
            if bg_match:
                bg_url = bg_match.group(1).split('?')[0]
                if 'framerusercontent.com' in bg_url:
                    self.images.append({
                        'src': bg_url,
                        'type': 'background',
                        'section': self.current_section['name'] if self.current_section else 'Unknown'
                    })
        
        if tag == 'style':
            self.in_style = True
    
    def handle_endtag(self, tag):
        if tag == 'style':
            self.in_style = False
        
        # Save section when it ends
        if self.current_section and tag == 'div':
            # This is a simplification - would need better logic
            pass
    
    def handle_data(self, data):
        if self.in_style:
            self.styles.append(data)
        elif self.current_section and data.strip():
            self.current_section['content'].append(data.strip())

# Read HTML
with open(r'D:\tonal\Development\alle-tech\_design-spec\html\home.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract images
images = set()
for match in re.finditer(r'<img[^>]*src=["\']([^"\']+)["\'][^>]*>', html):
    src = match.group(1).split('?')[0]
    if 'framerusercontent.com' in src:
        images.add(src)

for match in re.finditer(r'background-image:\s*url\(["\']?([^"\')]+)["\']?\)', html):
    src = match.group(1).split('?')[0]
    if 'framerusercontent.com' in src:
        images.add(src)

print("=== IMAGES ===")
for img in sorted(images):
    print(img)

# Extract all text from h1-h6, p tags
print("\n=== HEADINGS ===")
for match in re.finditer(r'<(h[1-6])[^>]*>(.*?)</\1>', html, re.DOTALL):
    tag, text = match.groups()
    clean_text = re.sub(r'<[^>]+>', '', text).strip()
    if clean_text:
        print(f"{tag.upper()}: {clean_text}")

print("\n=== PARAGRAPHS (first 50) ===")
count = 0
for match in re.finditer(r'<p[^>]*>(.*?)</p>', html, re.DOTALL):
    text = match.group(1)
    clean_text = re.sub(r'<[^>]+>', '', text).strip()
    if clean_text and count < 50:
        print(f"P: {clean_text}")
        count += 1

