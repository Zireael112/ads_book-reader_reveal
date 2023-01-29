const rotatorCase = document.getElementsByClassName("rotator");

[...rotatorCase].forEach(banner => {
	const bannerList = banner.getElementsByClassName("rotator__case")
	const caseIter = index => {
    [...bannerList].forEach(element => {
			element.classList.remove("rotator__case_active")
		})

		index = bannerList[index].nextElementSibling ? index + 1 : 0

		let speed = bannerList[index].getAttribute("data-speed")
		let color = bannerList[index].getAttribute("data-color")

		bannerList[index].setAttribute("style", `color: ${color}`)
		bannerList[index].classList.add("rotator__case_active")

		setTimeout(caseIter, speed, index)
	}

	setTimeout(caseIter, 0, 0)
})