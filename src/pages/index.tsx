import * as React from "react"
import type { HeadFC } from "gatsby"
import {StaticImage} from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <h1 className="text-3xl">Temple of Beasts</h1>
      <StaticImage width={1000} height={780.52} alt="temple map" src="../images/maps/numbered-temple-map-min.jpg" />
        <h1 className="text-3xl">Background</h1>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
