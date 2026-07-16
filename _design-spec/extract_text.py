import re, html, sys

name = sys.argv[1]
src = open(f'html/{name}.html', encoding='utf-8').read()
src = re.sub(r'<style.*?</style>', '', src, flags=re.S)
src = re.sub(r'<script.*?</script>', '', src, flags=re.S)
tags = re.findall(r'<(h[1-6]|p)[^>]*>(.*?)</\1>', src, re.S)
seen = []
prev = None
for tag, inner in tags:
    text = html.unescape(re.sub(r'<[^>]+>', ' ', inner))
    text = re.sub(r'\s+', ' ', text).strip()
    if text and (tag, text) != prev:
        seen.append(f'[{tag}] {text}')
        prev = (tag, text)
out = '\n'.join(seen)
open(f'{name}-text.txt', 'w', encoding='utf-8').write(out)
print(out)
