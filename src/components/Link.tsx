export default function Link({
  linkId,
  link,
  text,
}: {
  linkId: string;
  link: string;
  text: string;
}) {
  return (
    <a className="button" href={link} id={linkId}>
      {text}
    </a>
  );
}
