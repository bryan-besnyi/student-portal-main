import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const options = (linkedAssets) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const assetId = node?.data?.target?.sys?.id;

      const asset = linkedAssets.find((asset) => asset.sys.id === assetId);

      const imageUrl = asset?.url || "";
      const altText = asset?.description || "Embedded image";

      return imageUrl
        ? `<img src="${imageUrl}" alt="${altText}" class="my-4 rounded-lg mx-auto max-w-full" />`
        : "<p>[Image not available]</p>";
    },
    [INLINES.HYPERLINK]: (node) => {
      const url = node?.data?.uri ?? "#";
      const linkText = node.content[0]?.value ?? "Link";
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">${linkText}</a>`;
    },
  },
});

export default options;
