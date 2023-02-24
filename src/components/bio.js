/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  return (
    <div className="bio">
      <StaticImage
        width={50}
        height={50}
        quality={95}
        layout="fixed"
        alt="Profile picture"
        className="bio-avatar"
        formats={["auto", "webp", "avif"]}
        src="../assets/images/profile-pic.png"
      />
      <div>
        <p>Hey Guys! My name is <strong>Wei Bo</strong>.</p>
        <p>I am a software development engineer.</p>
      </div>
    </div>
  )
}

export default Bio
