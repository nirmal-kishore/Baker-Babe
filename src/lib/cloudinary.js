// Cloudinary unsigned client-side upload.
// Images are uploaded directly from the browser to Cloudinary using an
// *unsigned* upload preset, so no server or API secret is involved.
// Configure these in .env.local (see .env.example):
//   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME    — your Cloudinary cloud name
//   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET — an unsigned upload preset
export const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
export const CLOUDINARY_UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET

/**
 * Upload a single image file to Cloudinary via an unsigned preset.
 * @param {File} file - the image file selected by the user
 * @returns {Promise<{ success: boolean, url?: string, message?: string }>}
 */
export async function uploadToCloudinary(file) {
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
    return {
      success: false,
      message:
        'Image upload is not configured. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET in .env.local and restart the dev server.',
    }
  }

  if (!file) {
    return { success: false, message: 'No file selected.' }
  }

  const endpoint = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`
  const body = new FormData()
  body.append('file', file)
  body.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

  try {
    const res = await fetch(endpoint, { method: 'POST', body })
    const data = await res.json()

    if (!res.ok || !data.secure_url) {
      return {
        success: false,
        message: data?.error?.message || 'Upload failed. Please try again.',
      }
    }

    return { success: true, url: data.secure_url }
  } catch {
    return { success: false, message: 'Network error while uploading. Please try again.' }
  }
}
