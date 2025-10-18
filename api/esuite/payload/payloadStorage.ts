// File: helpers/tokenStorage.ts (atau src/utils/tokenStorage.ts)

import * as fs from "fs"; // <--- Ini yang penting: Impor modul 'fs'
import * as path from "path"; // <--- Ini yang penting: Impor modul 'path'

// Definisikan interface untuk data yang akan disimpan di JSON
export interface StoredTokenData {
  // <--- Export interface ini agar bisa diimpor
  payloadCustomer: string;
}

export function saveTokenToJsonFile(
  tokenData: StoredTokenData,
  fileName: any
): void {
  // Sesuaikan projectRoot agar menunjuk ke root folder project Anda
  // Jika helpers/tokenStorage.ts ada di project_root/helpers/, maka '../..' akan membawa ke project_root
  const projectRoot = path.resolve(__dirname, "../../.."); // Sesuaikan ini!
  const filePath = path.join(projectRoot, fileName);

  try {
    const dataToWrite = JSON.stringify(tokenData, null, 2);
    fs.writeFileSync(filePath, dataToWrite, { encoding: "utf8" });
    console.log(`✅ Access token berhasil disimpan ke: ${filePath}`);
  } catch (error) {
    console.error(`❌ Gagal menyimpan access token ke ${filePath}:`, error);
  }
}

// (Opsional, tapi direkomendasikan untuk fungsi loadTokenFromJsonFileToken juga di sini)
export function loadTokenFromJsonFileCustomer(
  fileName: any
): StoredTokenData | null {
  const projectRoot = path.resolve(__dirname, "./"); // Sesuaikan ini!
  const filePath = path.join(projectRoot, fileName);

  try {
    if (!fs.existsSync(filePath)) {
      console.log(`ℹ️ File token tidak ditemukan di: ${filePath}`);
      return null;
    }
    const fileContent = fs.readFileSync(filePath, "utf8");
    const tokenData: StoredTokenData = JSON.parse(fileContent);

    if (tokenData.expires_at && tokenData.expires_at < Date.now()) {
      console.warn("⚠️ Access token sudah kedaluwarsa. Perlu login ulang.");
      return null;
    }
    return tokenData;
  } catch (error) {
    console.error(
      `❌ Gagal membaca atau mem-parsing file token dari ${filePath}:`,
      error
    );
    return null;
  }
}
