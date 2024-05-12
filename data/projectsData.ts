interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Recursion Tree Visualizer',
    description: `A simple python package to visualize recursive function which can be useful for academic purpose as well as debugging. It generates animation and draws recursion tree.`,
    imgSrc:
      'https://socialify.git.ci/Bishalsarang/Recursion-Tree-Visualizer/image?description=1&forks=1&language=1&name=1&owner=1&pattern=Solid&stargazers=1&theme=Auto',
    href: 'https://github.com/Bishalsarang/Recursion-Tree-Visualizer',
  },
  {
    title: 'Leetcode-Questions-Scraper',
    description: `
LeetCode Questions Scrapper 
LeetCode Questions Scrapper 
Sep 2019 - PresentSep 2019 - Present
Show project
A scrapper written in Python to scrape algorithmic problems from leetcode.com and save as html and epub format.
Currently, it supports downloading of problem statements only.`,
    imgSrc:
      'https://socialify.git.ci/Bishalsarang/Leetcode-Questions-Scraper/image?description=1&font=Inter&forks=1&language=1&name=1&owner=1&pattern=Charlie%20Brown&stargazers=1&theme=Auto',
    href: 'https://github.com/Bishalsarang/Recursion-Tree-Visualizer',
  },
]

export default projectsData
