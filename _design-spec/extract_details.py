import re
from html import unescape

with open(r'D:\tonal\Development\alle-tech\_design-spec\html\home.html', 'r', encoding='utf-8') as f:
    html = f.read()

def clean(text):
    return unescape(re.sub(r'<[^>]+>', '', text).strip())

# Get ALL unique paragraph texts
all_p = []
for match in re.finditer(r'<p[^>]*>(.*?)</p>', html, re.DOTALL):
    text = clean(match.group(1))
    if text and len(text) > 1 and text not in all_p:
        all_p.append(text)

print("=" * 80)
print("ALL UNIQUE PARAGRAPHS:")
print("=" * 80)
for i, p in enumerate(all_p, 1):
    print(f"{i}. {p}")

# Extract testimonial details
print("\n\n" + "=" * 80)
print("TESTIMONIALS:")
print("=" * 80)
testimonial_pattern = r'data-framer-name="[^"]*Testimonial Card[^"]*".*?<h4[^>]*>(.*?)</h4>.*?<p[^>]*>(.*?)</p>.*?data-framer-name="Author Name"[^>]*>(.*?)</div>'
for i, match in enumerate(re.finditer(testimonial_pattern, html, re.DOTALL)[:5], 1):
    quote = clean(match.group(1))
    category = clean(match.group(2))
    author_section = match.group(3)
    author = clean(author_section)
    print(f"\nTestimonial {i}:")
    print(f"  Quote: {quote}")
    print(f"  Category: {category}")
    print(f"  Author: {author}")

# Extract Work/Steps section
print("\n\n" + "=" * 80)
print("WORK STEPS:")
print("=" * 80)
work_pattern = r'data-framer-name="Work card[^"]*"[^>]*>(.*?)(?=data-framer-name="Work card|data-framer-name="[^W]|$)'
for i, match in enumerate(re.finditer(work_pattern, html, re.DOTALL)[:3], 1):
    content = match.group(1)
    h4 = [clean(m.group(1)) for m in re.finditer(r'<h4[^>]*>(.*?)</h4>', content, re.DOTALL)]
    h6 = [clean(m.group(1)) for m in re.finditer(r'<h6[^>]*>(.*?)</h6>', content, re.DOTALL)]
    p = [clean(m.group(1)) for m in re.finditer(r'<p[^>]*>(.*?)</p>', content, re.DOTALL)]
    
    print(f"\nStep {i}:")
    if h4:
        print(f"  Number: {h4[0]}")
    if h6:
        print(f"  Title: {h6[0]}")
    if p:
        print(f"  Description: {[x for x in p if x and len(x) > 10]}")

# Extract service cards
print("\n\n" + "=" * 80)
print("SERVICE CARDS:")
print("=" * 80)
service_pattern = r'data-framer-name="Desktop Service Card[^"]*"[^>]*>(.*?)(?=data-framer-name="Desktop Service Card|data-framer-name="Phone Service Card|$)'
for i, match in enumerate(re.finditer(service_pattern, html, re.DOTALL)[:4], 1):
    content = match.group(1)
    h4 = [clean(m.group(1)) for m in re.finditer(r'<h4[^>]*>(.*?)</h4>', content, re.DOTALL)]
    h6 = [clean(m.group(1)) for m in re.finditer(r'<h6[^>]*>(.*?)</h6>', content, re.DOTALL)]
    p = [clean(m.group(1)) for m in re.finditer(r'<p[^>]*>(.*?)</p>', content, re.DOTALL)]
    
    print(f"\nService {i}:")
    if h4:
        print(f"  Number: {h4[0]}")
    if h6:
        print(f"  Title: {h6[0]}")
    desc = [x for x in p if x and len(x) > 20]
    if desc:
        print(f"  Description: {desc[0]}")

