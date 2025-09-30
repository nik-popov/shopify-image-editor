import { Card, Stack, Text, Button, TextField } from "@shopify/polaris";
import { useState } from "react";

export interface ImageEditorProps {
  imageUrl?: string;
  onSave?: (editedImageUrl: string) => void;
}

export function ImageEditor({ imageUrl, onSave }: ImageEditorProps) {
  const [brightness, setBrightness] = useState("100");
  const [contrast, setContrast] = useState("100");

  const handleSave = () => {
    // This would integrate with actual image processing
    const editedUrl = `${imageUrl}?brightness=${brightness}&contrast=${contrast}`;
    onSave?.(editedUrl);
  };

  return (
    <Card>
      <Stack vertical>
        <Text variant="headingMd" as="h3">
          Image Editor
        </Text>
        
        {imageUrl && (
          <div style={{ textAlign: "center", margin: "1rem 0" }}>
            <img 
              src={imageUrl} 
              alt="Preview" 
              style={{ 
                maxWidth: "100%", 
                maxHeight: "300px",
                filter: `brightness(${brightness}%) contrast(${contrast}%)` 
              }} 
            />
          </div>
        )}

        <TextField
          label="Brightness (%)"
          value={brightness}
          onChange={setBrightness}
          type="number"
          autoComplete="off"
        />

        <TextField
          label="Contrast (%)"
          value={contrast}
          onChange={setContrast}
          type="number"
          autoComplete="off"
        />

        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Stack>
    </Card>
  );
}