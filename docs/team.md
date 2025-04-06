---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://projectkanha.com/images/rssq.jpg',
    name: 'Ravi Shankar',
    title: 'Founder',
    links: [
      // { icon: 'github', link: 'https://github.com/yyx990803' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      We are a team of crazy mad believers, who believe in changing world! 
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>