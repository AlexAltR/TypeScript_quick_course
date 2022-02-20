// enum - вспомогательная сущность, которая помогает структурировать код, если есть однотипные элементы

enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
console.log(membership) // Вернет порядковый номер Standart в enum Membership от 0

//Если хотим извлеч строку Enum
const membershipRevers = Membership[2]
console.log(membershipRevers)

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social) // Выведет 'INSTAGRAM'


