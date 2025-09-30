import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Page, Layout, Card, Text, Button } from "@shopify/polaris";
import { ImageEditor } from "~/components/ImageEditor";

export const loader = async () => {
  return json({
    message: "Welcome to Shopify Image Editor!",
    sampleImageUrl: "https://via.placeholder.com/400x300.jpg", // Sample image for demo
  });
};

export default function Index() {
  const { message, sampleImageUrl } = useLoaderData<typeof loader>();

  const handleImageSave = (editedImageUrl: string) => {
    console.log("Saving edited image:", editedImageUrl);
    // Here you would save the edited image back to Shopify
  };

  return (
    <Page title="Image Editor">
      <Layout>
        <Layout.Section>
          <Card>
            <Text variant="headingMd" as="h2">
              {message}
            </Text>
            <Text as="p">
              This is your Shopify Image Editor app. Use this space to build image editing functionality for your store.
            </Text>
            <div style={{ marginTop: "1rem" }}>
              <Button variant="primary">Get Started</Button>
            </div>
          </Card>
        </Layout.Section>
        
        <Layout.Section>
          <ImageEditor 
            imageUrl={sampleImageUrl}
            onSave={handleImageSave}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}