import PageInfo from './pageInfo'
import skill from './skill'
import experience from './experience.js'
import project from './project'
import social from './social'
import {createSchema} from 'sanity'

export const schemaTypes = [PageInfo, skill, experience, project, social]

export default createSchema({
  name: 'default',

  types: schemaTypes.concat(),
})
