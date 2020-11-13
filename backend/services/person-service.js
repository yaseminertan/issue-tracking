const BaseService = require('./base-service')
const PersonModel = require('../models/person')

class PersonService extends BaseService {
    model = PersonModel

    async createIssue(person, issue) {
        issue.createdby=person
        await person.save()
        await issue.save()
    }
    async joinTeam(person, team) {
        person.team=team
        team.people.push(person)
        await person.save()
        await team.save()
    }
}

module.exports = new PersonService()