const Component = (outputString: string): HTMLDivElement => {
    const element = document.createElement('div')

    element.innerHTML = outputString

    return element
}

document.body.appendChild(Component('Hello World!'))
