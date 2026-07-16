import re
from html import unescape
from collections import defaultdict

with open(r'D:\tonal\Development\alle-tech\_design-spec\html\home.html', 'r', encoding='utf-8') as f:
    html = f.read()

def clean_text(text):
    text = re.sub(r'<[^>]+>', '', text).strip()
    text = unescape(text)
    return text

# Find sections by data-framer-name
sections = {}
section_pattern = r'data-framer-name="([^"]*Section[^"]*)"[^>]*>(.*?)(?=data-framer-name="[^"]*Section|$)'
for match in re.finditer(section_pattern, html, re.DOTALL):
    section_name = match.group(1)
    section_content = match.group(2)
    
    # Extract text from section
    h1 = [clean_text(m.group(1)) for m in re.finditer(r'<h1[^>]*>(.*?)</h1>', section_content, re.DOTALL)]
    h2 = [clean_text(m.group(1)) for m in re.finditer(r'<h2[^>]*>(.*?)</h2>', section_content, re.DOTALL)]
    h3 = [clean_text(m.group(1)) for m in re.finditer(r'<h3[^>]*>(.*?)</h3>', section_content, re.DOTALL)]
    h4 = [clean_text(m.group(1)) for m in re.finditer(r'<h4[^>]*>(.*?)</h4>', section_content, re.DOTALL)]
    h6 = [clean_text(m.group(1)) for m in re.finditer(r'<h6[^>]*>(.*?)</h6>', section_content, re.DOTALL)]
    p = [clean_text(m.group(1)) for m in re.finditer(r'<p[^>]*>(.*?)</p>', section_content, re.DOTALL)]
    
    sections[section_name] = {
        'h1': [t for t in h1 if t],
        'h2': [t for t in h2 if t],
        'h3': [t for t in h3 if t],
        'h4': [t for t in h4 if t],
        'h6': [t for t in h6 if t],
        'p': [t for t in p if t and len(t) > 2]
    }

print("SECTIONS FOUND:")
print("=" * 80)
for section_name, content in sections.items():
    print(f"\n### {section_name}")
    if content['h1']:
        print(f"  H1: {content['h1']}")
    if content['h2']:
        print(f"  H2: {content['h2']}")
    if content['h3']:
        print(f"  H3: {content['h3']}")
    if content['h4']:
        print(f"  H4: {content['h4']}")
    if content['h6']:
        print(f"  H6: {content['h6']}")
    if content['p']:
        print(f"  P ({len(content['p'])} paragraphs):")
        for p_text in content['p'][:5]:  # First 5
            if len(p_text) < 100:
                print(f"    - {p_text}")
            else:
                print(f"    - {p_text[:100]}...")

# Extract FAQ questions and answers
print("\n\n" + "=" * 80)
print("FAQ CONTENT:")
print("=" * 80)
faq_pattern = r'data-framer-name="Question[^"]*"[^>]*>(.*?)</div>.*?data-framer-name="Ansewr[^"]*"[^>]*>(.*?)</div>'
faq_matches = re.findall(faq_pattern, html, re.DOTALL)
for i, (question, answer) in enumerate(faq_matches[:10], 1):
    q_text = clean_text(question)
    a_text = clean_text(answer)
    if q_text and a_text:
        print(f"\nQ{i}: {q_text}")
        print(f"A{i}: {a_text[:200]}..." if len(a_text) > 200 else f"A{i}: {a_text}")

# Extract pricing info
print("\n\n" + "=" * 80)
print("PRICING CARDS:")
print("=" * 80)
pricing_pattern = r'data-framer-name="[^"]*Pricing Card[^"]*"[^>]*>(.*?)(?=data-framer-name="[^"]*Pricing Card|data-framer-name="[^"]*Section)'
for i, match in enumerate(re.finditer(pricing_pattern, html, re.DOTALL), 1):
    content = match.group(1)
    h6_titles = [clean_text(m.group(1)) for m in re.finditer(r'<h6[^>]*>(.*?)</h6>', content, re.DOTALL)]
    h2_prices = [clean_text(m.group(1)) for m in re.finditer(r'<h2[^>]*>(.*?)</h2>', content, re.DOTALL)]
    p_texts = [clean_text(m.group(1)) for m in re.finditer(r'<p[^>]*>(.*?)</p>', content, re.DOTALL)]
    
    print(f"\nCard {i}:")
    if h6_titles:
        print(f"  Title: {h6_titles[0]}")
    if h2_prices:
        print(f"  Price: {h2_prices[0]}")
    if p_texts:
        print(f"  Features: {[p for p in p_texts if p and len(p) > 2][:10]}")

