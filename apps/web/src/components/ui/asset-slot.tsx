type AssetSlotProps = {
  label: string;
  ratio?: "wide" | "square" | "portrait";
};

export function AssetSlot({ label, ratio = "wide" }: AssetSlotProps) {
  return (
    <div className={`asset-slot asset-slot--${ratio}`}>
      <span>{label}</span>
    </div>
  );
}
