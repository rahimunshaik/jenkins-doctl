function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Bye ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
}
