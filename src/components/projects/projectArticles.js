const projectArticles = {
  1: {
    title: "ChessBoard Map for A.I",
    sections: [
      { type: "heading", content: "Understanding Chessboard Heatmaps" },
      { type: "paragraph", content: "In this project, I analyzed over 1 million chess games using Python and visualized the heatmaps of piece movements." },
    { type: "image", src: "/sql.png", alt: "Demo", className: "half-width-img"},
      { type: "paragraph", content: "We used pandas to extract move positions and matplotlib to create square-wise heatmaps." },
      { type: "code", content: `df = pd.read_csv('games.csv')\nheatmap = generate_heatmap(df['moves'])\nplt.imshow(heatmap)` },
    ]
  },

  2: {
    title: "HR Analytics Deep Dive",
    sections: [
      { type: "heading", content: "Why Employees Leave: A Data Perspective" },
      { type: "paragraph", content: "Power BI helped us visualize trends in attrition. We explored key metrics like age, salary, and satisfaction." },
      { type: "image", src: "/article/hr-graph.png", alt: "Attrition Dashboard" },
    ]
  },

  3: {
    title: "SQL Data Warehouse Explained",
    sections: [
      { type: "heading", content: "Building a Star Schema" },
      { type: "paragraph", content: "Using SQL and ETL scripts, we created a clean dimensional model for efficient querying." },
      { type: "code", content: `SELECT * FROM fact_sales\nJOIN dim_product ON fact_sales.product_id = dim_product.id;` }
    ]
  },
};

export default projectArticles;
