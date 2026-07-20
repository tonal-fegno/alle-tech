interface RichTextProps {
  html: string;
  className?: string;
}

export default function RichText({ html, className = "" }: RichTextProps) {
  return (
    <div
      className={`rich-text ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
