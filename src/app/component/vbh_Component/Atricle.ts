interface Article {
    title: string;
    author: string;
    publishDate: string;
    page: string;
    volume: string;
    issue: string;
    readArticle:string;
  }
  
  interface ArticleListProps {
    articles: Article[];
  }