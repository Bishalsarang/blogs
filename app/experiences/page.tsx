import { allExperiences, Experiences } from 'contentlayer/generated'
import { allCoreContent, coreContent, CoreContent } from 'pliny/utils/contentlayer'
import ExperienceLayout from '@/layouts/ExperienceLayout'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Blog' })

export default function ExperiencePage() {
  const experiences = allCoreContent(allExperiences)
  console.log(experiences[0].experiences)
  return (
    <>
      <ExperienceLayout experiences={experiences[0].experiences}></ExperienceLayout>
    </>
  )
}
