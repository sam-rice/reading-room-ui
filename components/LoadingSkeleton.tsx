import { FC } from "react";
import PageContainer from "./PageContainer";


const LoadingSkeleton: FC = () => {

  return (
    <PageContainer className="items-center justify-center">
      <div>loading...</div>
    </PageContainer>
  )
}

export default LoadingSkeleton