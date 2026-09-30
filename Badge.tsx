const tones: Record<string, string> = {
  Professional: "bg-pink text-white", Training: "bg-purple text-white", Personal: "bg-orange text-ink",
};
export default function Badge({ kind }: { kind: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-bold ${tones[kind] ?? "bg-ink text-white"}`}>{kind}</span>;
}
