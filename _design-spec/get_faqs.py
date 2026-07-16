import re
from html import unescape

with open(r'D:\tonal\Development\alle-tech\_design-spec\html\home.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find FAQ section
faq_section = re.search(r'data-framer-name="FAQ Section"[^>]*>(.*?)(?=data-framer-name="Contact Section"|$)', html, re.DOTALL)

if faq_section:
    faq_html = faq_section.group(1)
    
    # Find all question/answer pairs
    qa_pairs = []
    
    # Method 1: Find by p tags containing numbers
    questions = re.findall(r'<p[^>]*>(\d+\.\s+[^<]+)</p>', faq_html)
    print("QUESTIONS:")
    for q in questions:
        print(f"  {unescape(q)}")
    
    # Method 2: Find paragraphs that look like answers  
    all_p = re.findall(r'<p[^>]*>([^<]{30,})</p>', faq_html, re.DOTALL)
    print("\nANSWERS (longer paragraphs):")
    for p in all_p[:20]:
        text = unescape(p.strip())
        if not text.startswith(('1.', '2.', '3.', '4.', '5.', '6.', 'FAQ', 'Find answers')):
            print(f"  - {text[:150]}...")

