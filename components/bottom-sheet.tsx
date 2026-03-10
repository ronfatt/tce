"use client";

import { X } from "lucide-react";

type BottomSheetProps = {
  open: boolean;
  title?: string;
  subtitle?: string;
  onClose: () => void;
  children: React.ReactNode;
};

export function BottomSheet({
  open,
  title,
  subtitle,
  onClose,
  children,
}: BottomSheetProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-slate-950/35 backdrop-blur-sm">
      <button
        type="button"
        aria-label="关闭"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={onClose}
      />
      <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[430px] rounded-t-[32px] border border-slate-200/80 bg-white px-5 pb-8 pt-4 shadow-soft">
        <div className="mx-auto h-1.5 w-14 rounded-full bg-slate-200" />
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            {title ? (
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                {title}
              </h3>
            ) : null}
            {subtitle ? (
              <p className="mt-1 text-sm leading-6 text-slate-500">{subtitle}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 bg-white p-2 text-slate-500"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
