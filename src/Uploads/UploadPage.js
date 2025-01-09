import React, { useState } from 'react';
import './UploadPage.css';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Proszę wybrać plik przed przesłaniem.");
      return;
    }

    // Logowanie w celu potwierdzenia wysłania pliku
    console.log("Przesyłany plik:", selectedFile);

    // Wysyłanie do backendu (przykład z lokalnym API)
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      // Pseudo-wywołanie backendu (C#)
      const response = await fetch("http://localhost:4000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Błąd: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Odpowiedź backendu:", result);
      alert("Plik został przesłany pomyślnie!");
    } catch (error) {
      console.error("Błąd podczas przesyłania pliku:", error);
      alert("Wystąpił błąd podczas przesyłania pliku.");
    }

    // Czyszczenie stanu
    setSelectedFile(null);
  };

  return (
    <div className="upload-page">
      <h2>📤 Prześlij plik PDF/JPG</h2>
      <form onSubmit={handleFileUpload} className="upload-form">
        <div className="form-group">
          <label htmlFor="file">Wybierz plik:</label>
          <input
            type="file"
            id="file"
            accept=".pdf, .jpg, .jpeg"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="upload-button">
          Prześlij
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
