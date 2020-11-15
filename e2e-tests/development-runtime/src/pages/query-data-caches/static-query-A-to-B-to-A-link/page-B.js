import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { QueryDataCachesView } from "../../../components/query-data-caches/view"

export default function StaticQueryAtoBtoALinkPageB({ path }) {
  const data = useStaticQuery(graphql`
    {
      queryDataCachesJson(selector: { eq: "static-query-A-to-B-to-A-link" }) {
        selector
        status
      }
    }
  `)

  return (
    <>
      <QueryDataCachesView
        data={data}
        pageType="B"
        dataType="static-query"
        path={path}
      />
      <Link to="../page-A" data-testid="page-a-link">
        Go back to page A
      </Link>
    </>
  )
}
