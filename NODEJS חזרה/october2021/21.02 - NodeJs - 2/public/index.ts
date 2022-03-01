const hendleSelectUsers = (e) => {
    const gender = e.target.value;
    console.log(gender)

    if (gender) {
        try {
            axios.get(`/get-users?gender=${gender}`)
                .then(({ data }) => {
                    console.log(data)

                    const root = document.querySelector('.root')

                    let html = ''

                    if (Array.isArray(data)) {
                        data.forEach(user => {
                            html += `<p>${user.name}</p>`
                        })
                        root.innerHTML = html
                    }
                })
                .catch(err => console.error(err))
        } catch (error) {
            console.error(error)
        }
    } else {
        throw new Error(`err`);
    }
}

const hendleSelectAge = (e) => {
    const age = e.target.value;
    console.log(age)

    if (age) {
        try {
            axios.get(`/get-users-slider?age=${age}`)
                .then(({ data }) => {
                    console.log(data)

                    const root2 = document.querySelector('.root2')

                    let html = ''

                    if (Array.isArray(data)) {
                        data.forEach(user => {
                            html += `<p>${user.name}</p>`
                        })
                        root2.innerHTML = html
                    } else {
                        throw new Error(`err`)
                    }
                })
                .catch(err => console.error(err))
        } catch (error) {
            console.error(error)
        }
    } else {
        throw new Error(`err`);
    }
}

