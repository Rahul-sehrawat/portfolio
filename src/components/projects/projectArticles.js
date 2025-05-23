const projectArticles = {
  1: {  
  title: "Chessboard Map",
  sections: [
    {
      type: "heading",
      content: "Understanding Chessboard Heatmaps"
    },
    {
      type: "paragraph",
      content: "The goal of this project was to analyze thousands of real chess games and identify which squares on the chessboard are most frequently played. Using PGN-style move data, I created heatmaps to uncover movement patterns, revealing high-activity zones and strategic hotspots."
    },
    {
      type: "heading",
      content: "Dataset Overview"
    },
    {
      type: "paragraph",
      content: "I used a Kaggle dataset containing around 50,000 chess games stored in CSV format. The dataset includes metadata such as player names, Elo ratings, match result, date, and most importantly, a column with all moves in PGN notation."
    },
    {
      type: "image",
      src: "/chessgame.png",
      alt: "Overall Chessboard Heatmap",
      className: "medium-width-img"
    },
    ,
    {
      type: "list",
      content: [
        "File Format: CSV",
        "Key Columns: White, Black, White Elo, Black Elo, Date, Result, Moves",
        "Moves are in PGN (Portable Game Notation)"
      ]
    },
        {
      type: "image",
      src: "/chessnotation.png",
      alt: "Overall Chessboard Heatmap",
      className: "medium-width-img"
    },
    ,
    {
      type: "heading",
      content: "Tools & Technologies Used"
    },
    {
      type: "list",
      content: [
        "Microsoft Excel – for initial data exploration",
        "Python – for data processing and logic",
        "NumPy & Pandas – for data transformation and manipulation",
        "Matplotlib & Seaborn – for visualizing board heatmaps"
      ]
    },

    // project analysis
    {
      type: "heading",
      content: "Project analysis"
    },
        {
      type: "image",
      src: "/chessdiagram.png",
      alt: "Overall Chessboard Heatmap",
      className: "medium-width-img"
    },
       {
      type: "heading",
      content: "Import Libaries"
    },
    {
          type: "code",
      language: "python",
      content:`        import pandas as pd
        import numpy as np
        import seaborn as sns
        import matplotlib.pyplot as plt
        `
    },
    
    // 1. Load the Data (Pandas)
    {type: "heading", content: "1. Load the Data (Pandas)"},
    {type: "list",
      content: [
        "Loads the chess games CSV file into a pandas DataFrame.",
        "Removes all columns except the last one ('Moves'), so i can only keep the column with chess moves.",
      ]
    },

    // 2
    {type: "heading", content: "2. Create Chess Board Mapping "},
    {type: "list",
      content: [
        "Builds a dictionary with all 64 chessboard squares as keys initialized to 0.",
        "Useful for counting how often each square is reached.",
      ]
    },
    {
      type: "image",
      src: "/dict.png",
      alt: "Overall Chessboard Heatmap",
      className: "medium-width-img"
    },

    // 3.Count Move Frequencies
        {type: "heading", content: "3.Count Move Frequencies "},
    {type: "list",
      content: [
        "Takes a string of moves (PGN-style)",
        "Skips annotations like 1., +, #",
        "Handles special moves like castling (O-O, O-O-O)",
        "Extracts the destination square of each move",
        "Increments the square's count in sq_dict",
      ]
    },

    //4
    {type: "heading", content: "4.Convert Dictionary to 2D Array (NumPy) "},
    {type: "list",
      content: [
        "Converts the 64-length dictionary values into an 8x8 array.",
        "Transposes and flips it to match chessboard orientation (a1 bottom-left, h8 top-right).",
      ]
    },
    {
      type: "image",
      src: "/matrix.png",
      alt: "Overall Chessboard Heatmap",
      className: "medium-width-img"
    },

    // 5 
    {type: "heading", content: "5. Build the Heatmap DataFrame (Pandas) "},
    {type: "list",
      content: [
        "Converts the 2D NumPy array to a DataFrame with labeled rows and columns matching the chessboard layout.",
      ]
    },

    //6
        {type: "heading", content: "6. Plot the Heatmap (Seaborn + Matplotlib)"},
    {type: "list",
      content: [
        "Creates a chessboard-style heatmap where:",
        "Each square shows the number of times it's landed on",
        "annot=True: show numbers on squares",
      ]
    },








    
    //  here i am doing visualization
    {
      type: "heading",
      content: "Visualization"
    },
    
    // overall data
    {
      type: "heading",
      content: "Key Insights for Overall data"
    },
        {
      type: "list",
      content: [
        "The central squares—e4, d4, e5, and d5—emerge as the most active zones on the board. These positions are critical for controlling the game, often serving as the focal points for opening strategies and mid-game transitions.",
        "The edge and corner squares show significantly lower activity levels throughout the game, with notable exceptions during castling maneuvers. Their limited strategic value in most phases explains their underutilization."
      ]
    },
    {
      type: "image",
      src: "/overall.jpg",
      alt: "Overall Chessboard Heatmap",
      className: "medium-width-img"
    },

    // rook data

    {
      type: "heading",
      content: "Rook Activity Analysis – Heatmap Insights"
    },
    {
      type: "list",
      content: [
        "The heatmap clearly indicates that central files (especially d and e) and the 1st and 8th ranks are the most frequently occupied by rooks. This aligns with standard game strategies where rooks are often centralized to control open files and support key attacks or defenses.",
        "The a- and h-files, especially on middle ranks, display relatively lower usage, emphasizing that rooks are more impactful when centralized rather than confined to edges."
      ]
    },
        {
      type: "image",
      src: "/rook.jpg",
      alt: "Overall Chessboard Heatmap",
      className: "medium-width-img"
    },

    // knight data
    {
      type: "heading",
      content: "Knight Activity Analysis – Heatmap Insights"
    },
    {
      type: "list",
      content: [
        "The heatmap shows the highest activity concentrated in the central squares, particularly f6, f3, c3, and c6. These positions allow knights to maximize their movement potential, as knights have up to 8 possible moves from the center, compared to fewer on the edges.",
        "Knights are rarely placed on corner (a1, h1, a8, h8) and edge squares, as their mobility is significantly reduced. The data confirms this, showing low activity in those areas—these are suboptimal locations unless forced by tactical necessity."
      ]
    },
            {
      type: "image",
      src: "/knight.jpg",
      alt: "Overall Chessboard Heatmap",
      className: "medium-width-img"
    },

    // bishop data
    {
      type: "heading",
      content: "Bishop Activity Analysis – Heatmap Insights"
    },
    {
      type: "list",
      content: [
        "The heatmap shows highest activity in the central diagonals, particularly around squares like e4, d4, e5, d5, and notably d3, e3, d6, e6. Bishops thrive when centrally positioned, allowing them to control long diagonals across the board.",
        "The hottest square is f7, which may correlate with common tactical themes like the f7 weakness in openings or attacks targeting the king's position. This suggests frequent bishop pressure or sacrifices on this square."
      ]
    },
    {
      type: "image",
      src: "/Bishop.jpg",
      alt: "Overall Chessboard Heatmap",
      className: "medium-width-img"
    },

    // queen data
    {
      type: "heading",
      content: "Queen Activity Analysis – Heatmap Insights"
    },
    {
      type: "list",
      content: [
        "The heatmap aligns with a queen's role in the middlegame, where it's brought to central squares to support attacks and tactical threats.",
        "High counts on c2, c3, c7, and d2 hint at frequent early queen development in openings or early middlegame tactics, especially common in aggressive openings or queen-led attacks."
      ]
    },
        {
      type: "image",
      src: "/queen.jpg",
      alt: "Overall Chessboard Heatmap",
      className: "medium-width-img"
    },

 
    {
      type: "heading",
      content: "Impact and Benefits"
    },
    {
      type: "list",
      content: [
        "Coaches and chess educators can use these visual tools to explain positional concepts more effectively, turning abstract ideas into tangible patterns backed by real data.",
        "This data analysis can serve as a foundation for building smarter chess engines or training machine learning models by identifying high-probability positions and movement tendencies.",
        
      ]
    },
            {
      type: "image",
      src: "/evalfn.png",
      alt: "Overall Chessboard Heatmap",
      className: "medium-width-img"
    },
  ]
  },


// second project
2:{
  title: "HR Analytics Deep Dive",
  sections: [
    { type: "heading", content: "Why Employees Leave: A Data Perspective"},
    {
      type: "paragraph",
      content: "Employee attrition is a major concern for HR departments as it impacts productivity and business continuity. This project aims to provide a clear understanding of employee attrition trends through an interactive Power BI dashboard, helping HR teams make informed decisions to retain talent."
    },
    {
      type: "heading",
      content: "Dataset Overview"
    },
    {
      type: "paragraph",
      content: "For this project, I used a structured CSV dataset focused on employee attrition. The dataset contains detailed information about individual employees and includes key attributes such as:"
    },
        {
      type: "list",
      content: [
        "Employee ID (empid)",
        "Attrition Status (Yes/No)",
        "Monthly Income (Salary)",
        "Job Role",
        "Years at Company, and more."
      ]
    },
        {
      type: "paragraph",
      content: "This dataset forms the foundation of the analysis conducted in Power BI. It enables exploration of various factors influencing employee retention and turnover, allowing for the identification of patterns, correlations, and potential areas for intervention by HR teams."
    },


    {
      type: "image",
      src: "/hrdataview.png",
      alt: "Overall Chessboard Heatmap",
      className: "medium-width-img"
    },


    {
      type: "heading",
      content: "Tools & Technologies Used"
    },
    {
      type: "list",
      content: [
        "Microsoft Power BI – for building the dashboard and data modeling",
        "Microsoft Excel – for raw data storage and minor preprocessing",
        "Power Query – for data cleaning and transformation",
        "Skills: Data Visualization, Business Analysis"
      ]
    },
    {
      type: "heading",
      content: "Data Preparation"
    },
    {
      type: "paragraph",
      content: "The dataset included various employee attributes such as age, education, job role, income, attrition status, and tenure. Data cleaning and transformation were performed using Power Query in Power BI. The following steps were taken to prepare the data for analysis:"
    },
    {
      type: "list",
      content: [
        "Removed Irrelevant Columns: Unnecessary fields were eliminated to focus on meaningful insights.",
        "Removed Duplicate Records: Ensured data integrity by identifying and deleting duplicate entries",
        "Replaced Values: Standardized categorical values (unifying inconsistent labels) to maintain consistency across the dataset.",
        "Added Conditional Columns: Created new fields such as (Attrition rate) and other logic-based columns to enable categorized analysis and deeper insights."
      ]
    },
    {
      type: "heading",
      content: "Dashboard Features"
    },
    {
      type: "list",
      content: [
        "KPI Cards: Summary tiles at the top display high-level insights such as overall employee count, total attritions, attrition rate, average age, average salary, and average years at the company.",
        "Department Filter Buttons: Users can toggle between departments like Human Resources, Research & Development, and Sales to analyze attrition data specific to each department.",
        "Attrition by Salary Slab: Clearly shows that employees earning up to 5K are the most likely to leave, suggesting a strong correlation between salary and attrition.",
        "Attrition by Tenure: A line chart visualizing attrition by years at the company, indicating higher attrition within the first few years of employment.",
        "Attrition by Job Role: Highlights roles with the highest turnover — Laboratory Technicians and Sales Executives top the list.",
        "Interactive Table: A matrix showing attrition counts by job role and years at the company, helping spot retention trends for specific roles over time.",
        "Attrition by Demographics:",
        "Education: A donut chart showing which educational backgrounds have higher attrition rates.",
        "Age Group: A bar chart highlighting which age brackets see the most attrition, with the 26–35 age group showing the highest.",
        "Gender: A stacked bar visual depicting attrition counts by gender."
      ]
    },
    {
      type: "image",
      src: "/hrd.png",
      alt: "HR Dashboard Overview",
      className: "medium-width-img"
    },

    //charts and kpi

    {
      type: "heading",
      content: "Key Insights"
    },
    {
      type: "list",
      content: [
        "The overall attrition rate stands at 16.1%, which is significantly high and indicates a need for immediate attention from the HR department.",
        "A majority of the attrition occurred in the lowest salary slab (up to 5K). This suggests that low compensation is a primary driver of employee turnover.",
        "Attrition is highest during the first 1–3 years at the company, indicating that new employees may not be effectively engaged or integrated into the organization.",
        "The roles of Laboratory Technician, Sales Executive, and Research Scientist show the highest attrition."
      ]
    },
    {
      type: "heading",
      content: "Impact and Application"
    },
    {
      type: "paragraph",
      content: "This HR analytics project provides actionable insights into the key factors influencing employee attrition. By identifying trends across age, salary, job role, tenure, and education, the dashboard empowers HR professionals and management to:"
    },
        {
      type: "list",
      content: [
        "Target high-risk groups (e.g., low salary slabs, early-tenure employees) with focused engagement and retention initiatives..",
        "Use salary-based attrition data to reassess and structure competitive compensation packages.",
        "Refine hiring strategies and strengthen onboarding processes to reduce early-stage attrition.",
        "Offer visual, data-backed evidence to leadership for policy changes, training programs, and resource allocation."
      ]
    },
  ]
},


3:{
  title: "SQL Data Warehouse",
  sections: [
    {
      type: "heading",
      content: "Building Data Warehouse"
    },
    {
      type: "paragraph",
      content: "In today’s data-driven environment, organizations often struggle to derive actionable insights due to data fragmentation across different systems. In this project, sales data was dispersed across multiple CSV files originating from ERP and CRM systems, which made comprehensive analysis difficult and time-consuming. The objective of this project was to build a scalable and centralized Data Warehouse using SQL Server, where all relevant data sources could be cleaned, structured, and integrated. This setup aims to support efficient business intelligence, reporting, and strategic decision-making by ensuring data consistency, quality, and accessibility."
    },
    {
      type: "heading",
      content: "Dataset Overview"
    },
        {
      type: "paragraph",
      content: "The dataset used for this project consists of six CSV files, each containing critical business data from various departments:"
    },
      {type: "list",
      content: [
        "CustomerInfo.csv – Contains customer IDs, names, and core details.",
        "ProductInfo.csv – Includes product IDs, names, prices, and descriptions.",
        "SaleDetails.csv – Records of sales transactions with references to customers and products, including quantity and transaction dates.",
        "CustomerDemographics.csv – Includes customer gender and date of birth for demographic analysis.",
        "CustomerLocation.csv – Provides the geographic information of customers (country).",
        "ProductCategory.csv – Contains product categories and subcategories for classifying sales and inventory data."
      ]
    },
       {
      type: "image",
      src: "/dwhe1.png",
      alt: "SQL Data Warehouse Medallion Architecture",
      className: "medium-width-img"
    },
 
    {
      type: "paragraph",
      content: "These files serve as the raw input for the ETL (Extract, Transform, Load) pipeline, which was designed to clean, normalize, and integrate the data into a well-structured star schema in the SQL Server Data Warehouse."
    },



    {
      type: "heading",
      content: "Tools & Technologies Used"
    },
    {
      type: "list",
      content: [
        "SQL Server – for data storage and querying",
        "ETL Pipelines – custom scripts for data processing and transformation",
        "Medallion Architecture – Bronze, Silver, Gold layers",
        "Skills: Data Modeling, Data Engineering, ETL, SQL"
      ]
    },
    {
      type: "heading",
      content: "Data Warehouse Architecture"
    },
    {
      type: "paragraph",
      content: "The project followed the Medallion architecture model to ensure data traceability, quality, and scalability. Each layer of the architecture served a clear purpose:"
    },
    {
      type: "list",
      content: [
        "Bronze Layer: Ingests raw ERP and CRM data from CSV files into staging tables in SQL Server.",
        "Silver Layer: Performs data cleaning, transformation, type standardization, and joins to normalize records.",
        "Gold Layer: Contains the final star schema, with well-modeled fact and dimension tables for fast querying."
      ]
    },
    {
      type: "image",
      src: "/warehousemodel.png",
      alt: "SQL Data Warehouse Medallion Architecture",
      className: "half-width-img"
    },
    {
      type: "heading",
      content: "ETL Pipeline Implementation"
    },
    {
      type:"paragraph",
      content:"A structured and automated ETL (Extract, Transform, Load) pipeline was developed to streamline the data flow from raw sources to an analysis-ready data warehouse. The process was implemented using SQL Server through a combination of SQL scripts and stored procedures, ensuring maintainability and reusability. The ETL pipeline followed these key stages:"
    },
    {
      type: "list",
      content: [
        "Extraction (Bronze Layer): Raw data from six CSV files—including customer, product, sales, and demographic details—was ingested into staging tables. This preserved the original structure for auditing and ensured no data was lost during initial loading.",
        "Transformation (Silver Layer): During the transformation phase, key business rules were applied to clean and standardize the data. This included removing duplicates and null values, converting data types, merging related datasets and standardizing category names and date formats.",
        "Loading (Gold Layer): The cleansed and enriched data was loaded into a well-designed star schema, consisting of fact and dimension tables optimized for reporting. This final layer enabled fast querying and seamless integration with business intelligence tools."
      ]
    },
     {
      type: "image",
      src: "/etl.png",
      alt: "SQL Data Warehouse Medallion Architecture",
      className: "half-width-img"
    },



    {
      type: "heading",
      content: "Star Schema Design"
    },
    {
      type: "paragraph",
      content: "The Gold layer featured a star schema composed of a central fact table for sales transactions and surrounding dimension tables such as Customer, Product, Region. This optimized the warehouse for analytical workloads."
    },

    {
      type: "list",
      content: [
        "FactSales (transactional data)",
        "DimCustomer (customer details)",
        "DimProduct (product catalog)",
        "DimRegion (geographic segmentation)",
      ]
    },
    //  {
    //   type: "image",
    //   src: "/images/sql-data-warehouse-architecture.png",
    //   alt: "SQL Data Warehouse Medallion Architecture",
    //   className: "half-width-img"
    // },


    {
      type: "heading",
      content: "Impact and Benefits"
    },
    {
      type: "list",
      content: [
        "Automated data consolidation and transformation significantly reduced the time required to generate reports, enabling quicker insights and less manual work.",
        "Improved Data Accuracy and Consistency with Centralized data from multiple sources ensured a single source of truth, eliminating discrepancies and reducing errors in analysis.",
        "The star schema and Medallion architecture laid a strong foundation for future integration of more data sources, advanced analytics. "
      ]
    },
      {
      type: "heading",
      content: "Foundation for EDA and Advanced Analytics"
    },
    {
      type:"paragraph",
      content:"With the data now structured and cleaned in the Gold layer, it is well-suited for performing Exploratory Data Analysis (EDA) and applying advanced analytics techniques. This enables deeper insights into sales trends, customer behavior, and product performance, supporting more strategic business planning and forecasting."
    }
  ]
}

};

export default projectArticles;
