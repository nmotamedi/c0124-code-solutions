import { type FormEvent, useState } from 'react';

type Image = {
  imageId: number;
  url: string;
  caption: string;
};

export function UploadForm() {
  const [imageFile, setImageFile] = useState<Image>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const eventTarget = event.target as HTMLFormElement;
      const formData = new FormData(eventTarget);
      const ops = { method: 'POST', body: formData };
      const resp = await fetch('/api/uploads', ops);
      if (!resp.ok) throw new Error('Fetch failed');
      const addedImg = await resp.json();
      console.log('addedImg', addedImg);
      setImageFile(addedImg);
      eventTarget.reset();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      {imageFile && <img src={imageFile.url} alt={imageFile.caption} />}
      <h3>React File Uploads</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Caption:
          <input required autoFocus type="text" id="caption" name="caption" />
        </label>
        <br />
        <input
          required
          type="file"
          name="image"
          accept=".png, .jpg, .jpeg, .gif"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
