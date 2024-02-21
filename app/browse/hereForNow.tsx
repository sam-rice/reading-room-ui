import PageContainer from "@/components/PageContainer";
import { FC } from "react";

interface SearchResultsPageProps {
  params: {
    category: string
    query: string
  }
}


const SearchResultsPage:FC<SearchResultsPageProps> = ({ params }) => {

  return (
    <PageContainer>
      <div>something {params.category} category with query {params.query}</div>
    </PageContainer>
  )
}

export default SearchResultsPage