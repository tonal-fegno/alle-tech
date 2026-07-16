import re
import json
from html import unescape

# Read HTML
with open(r'D:\tonal\Development\alle-tech\_design-spec\html\home.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract all text from specific tags
def extract_all_text(tag_pattern):
    results = []
    for match in re.finditer(tag_pattern, html, re.DOTALL | re.IGNORECASE):
        text = match.group(1)
        clean_text = re.sub(r'<[^>]+>', '', text).strip()
        clean_text = unescape(clean_text)
        if clean_text and len(clean_text) > 1:
            results.append(clean_text)
    return results

# Get all headings
h1_texts = extract_all_text(r'<h1[^>]*>(.*?)</h1>')
h2_texts = extract_all_text(r'<h2[^>]*>(.*?)</h2>')
h3_texts = extract_all_text(r'<h3[^>]*>(.*?)</h3>')
h4_texts = extract_all_text(r'<h4[^>]*>(.*?)</h4>')
h5_texts = extract_all_text(r'<h5[^>]*>(.*?)</h5>')
h6_texts = extract_all_text(r'<h6[^>]*>(.*?)</h6>')

# Get all paragraphs
p_texts = extract_all_text(r'<p[^>]*>(.*?)</p>')

# Get all button texts
button_texts = []
for match in re.finditer(r'<button[^>]*>(.*?)</button>', html, re.DOTALL | re.IGNORECASE):
    text = match.group(1)
    clean_text = re.sub(r'<[^>]+>', '', text).strip()
    clean_text = unescape(clean_text)
    if clean_text and len(clean_text) > 1:
        button_texts.append(clean_text)

# Get all links
links = []
for match in re.finditer(r'<a[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', html, re.DOTALL | re.IGNORECASE):
    href = match.group(1)
    text = match.group(2)
    clean_text = re.sub(r'<[^>]+>', '', text).strip()
    clean_text = unescape(clean_text)
    if href and not href.startswith('javascript:'):
        links.append({'href': href, 'text': clean_text})

# Print results
print("=" * 80)
print("H1 HEADINGS:")
for i, text in enumerate(set(h1_texts), 1):
    print(f"{i}. {text}")

print("\n" + "=" * 80)
print("H2 HEADINGS:")
for i, text in enumerate(set(h2_texts), 1):
    print(f"{i}. {text}")

print("\n" + "=" * 80)
print("H4 HEADINGS:")
for i, text in enumerate(set(h4_texts), 1):
    print(f"{i}. {text}")

print("\n" + "=" * 80)
print("H6 HEADINGS:")
for i, text in enumerate(set(h6_texts), 1):
    print(f"{i}. {text}")

print("\n" + "=" * 80)
print("PARAGRAPH TEXTS (unique):")
unique_p = list(set(p_texts))[:30]
for i, text in enumerate(unique_p, 1):
    if len(text) < 200:
        print(f"{i}. {text}")
    else:
        print(f"{i}. {text[:200]}...")

print("\n" + "=" * 80)
print("BUTTONS:")
for i, text in enumerate(set(button_texts), 1):
    print(f"{i}. {text}")

print("\n" + "=" * 80)
print("LINKS (first 30):")
unique_links = {l['href']: l['text'] for l in links}
for i, (href, text) in enumerate(list(unique_links.items())[:30], 1):
    print(f"{i}. {text} -> {href}")

