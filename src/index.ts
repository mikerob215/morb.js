const morbject = Symbol.for('morb')

interface Morbject {
    [morbject]: boolean
}
export const createMorbject = (): Morbject => {
    return Object.create({[morbject]: true})
}
