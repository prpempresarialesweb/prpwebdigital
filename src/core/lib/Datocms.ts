import { GraphQLClient } from 'graphql-request'

interface RequestProps {
	query: any
	variables?: any
	preview?: any
}

export function Datocms({ query, variables, preview }: RequestProps) {
	const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`
	const client = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_DATOCMS_API_TOKEN}`,
		},
	})
	return client.request(query, variables)
}

export const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`

export const metaTagsFragment = `
  fragment metaTagsFragment on Tag {
    attributes
    content
    tag
  }
`
