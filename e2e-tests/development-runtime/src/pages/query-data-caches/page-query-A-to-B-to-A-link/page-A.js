import React from "react"
import { Link, graphql } from "gatsby"
import { QueryDataCachesView } from "../../../components/query-data-caches/view"

export default function PageQueryAtoBtoALinkPageA({ data, path }) {
  return (
    <>
      <QueryDataCachesView
        data={data}
        pageType="A"
        dataType="page-query"
        path={path}
      />
      <Link to="../page-B" data-testid="page-b-link">
        Go to page B
      </Link>
    </>
  )
}

export const query = graphql`
  {
    queryDataCachesJson(selector: { eq: "page-query-A-to-B-to-A-link" }) {
      selector
      status
    }
  }
`
