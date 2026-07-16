import re, sys

name = sys.argv[1]
src = open(f'html/{name}.html', encoding='utf-8').read()
# find data-framer-name and img src in document order
pattern = re.compile(r'data-framer-name="([^"]+)"|src="(https://framerusercontent\.com/images/[^"?]+)')
last_names = []
seen = set()
for m in pattern.finditer(src):
    if m.group(1):
        last_names.append(m.group(1))
        last_names = last_names[-4:]
    else:
        url = m.group(2)
        key = (url, tuple(last_names[-2:]))
        if key not in seen:
            seen.add(key)
            print(' > '.join(last_names), '::', url)
