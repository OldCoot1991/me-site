"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  /** Placeholder caption shown when empty. */
  placeholder?: string;
  /** Stable key for localStorage persistence. */
  storageId: string;
}

/**
 * User-fillable image placeholder. Click or drag-drop an image; it is stored
 * as a data URL in localStorage under `puls.img.<storageId>` so it survives
 * reloads. A remove button clears it.
 */
export function ImageSlot({ placeholder = "изображение", storageId }: Props) {
  const [src, setSrc] = useState<string | null>(null);
  const [dropping, setDropping] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const key = `puls.img.${storageId}`;

  useEffect(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) setSrc(saved);
    } catch {
      /* ignore */
    }
  }, [key]);

  const persist = (dataUrl: string | null) => {
    try {
      if (dataUrl) localStorage.setItem(key, dataUrl);
      else localStorage.removeItem(key);
    } catch {
      /* ignore quota errors */
    }
  };

  const readFile = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const url = String(reader.result);
      setSrc(url);
      persist(url);
    };
    reader.readAsDataURL(file);
  };

  return (
    <button
      type="button"
      className={`imageSlot${dropping ? " is-drop" : ""}`}
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDropping(true);
      }}
      onDragLeave={() => setDropping(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDropping(false);
        readFile(e.dataTransfer.files?.[0]);
      }}
      aria-label={`Загрузить: ${placeholder}`}
    >
      {src ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={placeholder} />
          <span
            className="imageSlot__remove"
            role="button"
            aria-label="Удалить изображение"
            onClick={(e) => {
              e.stopPropagation();
              setSrc(null);
              persist(null);
            }}
          >
            ×
          </span>
        </>
      ) : (
        <span className="imageSlot__hint">
          <span style={{ fontSize: 18 }}>+</span>
          {placeholder}
        </span>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => readFile(e.target.files?.[0])}
      />
    </button>
  );
}
