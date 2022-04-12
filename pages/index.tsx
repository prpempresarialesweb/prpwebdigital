import { gql } from 'graphql-request'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'
import { renderMetaTags } from 'react-datocms'
import Comments from 'src/core/components/UI/Feature/Comments'
import Feature from 'src/core/components/UI/Feature/Feature'
import Hero from 'src/core/components/UI/Hero/Hero'
import LayoutPublic from 'src/core/components/UI/Layout/LayoutPublic'
import ClientOnly from 'src/core/hooks/ClientOnly'
import { Datocms, metaTagsFragment, responsiveImageFragment } from 'src/core/lib/Datocms'

const HomeSeoQuery = gql`
	{
		home {
			seo: _seoMetaTags {
				...metaTagsFragment
			}
		}
		hero(filter: { page: { eq: "4537906" } }) {
			id
			title
			description
			buttonText
			buttonLink
			image {
				responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 484, h: 570, q: 100 }) {
					...responsiveImageFragment
				}
			}
		}

		allComments {
			id
			title
			comment
			author {
				name
				picture {
					responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 100, h: 100, q: 100 }) {
						...responsiveImageFragment
					}
				}
			}
		}

		allProducts(first: "3") {
			id
			price
			title
			gumroadProductLink
			coverImage {
				responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 328, h: 470, q: 100 }) {
					...responsiveImageFragment
				}
			}
			author {
				name
				profession
				picture {
					responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 100, h: 100, q: 100 }) {
						...responsiveImageFragment
					}
				}
			}
		}
	}
	${responsiveImageFragment}
	${metaTagsFragment}
`

export const getStaticProps: GetStaticProps = async () => {
	const data = await Datocms({
		query: HomeSeoQuery,
	})
	return {
		revalidate: 60,
		props: { data },
	}
}

const Home = ({ data }: any) => {
	return (
		<>
			<Head>{renderMetaTags(data.home.seo)}</Head>
			<ClientOnly>
				<Hero data={data.hero} />
				<Feature data={data.allProducts} />
				<Comments data={data.allComments} />
			</ClientOnly>
		</>
	)
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
	return <LayoutPublic>{page}</LayoutPublic>
}
