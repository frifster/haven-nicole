import './Product3DViewer.css';

function Product3DViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <div className="product-3d-viewer">
      <iframe
        src={modelUrl}
        title="3D Product Viewer"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default Product3DViewer; 