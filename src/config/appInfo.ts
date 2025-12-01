import type { AppLogo, StoreLinks } from "./types";

export const appInfo = {
	title: "Cari Ayat",
	description:
		"Aplikasi untuk menemukan ayat Al-Qur'an meski ada typo atau hanya mengingatnya samar-samar.",
	logo: {
		type: "image" as AppLogo["type"],
		src: "https://play-lh.googleusercontent.com/S4yniMvITl37cBR0zj3EJEcKUxK1-eHALev7ivaqLK5hOYDFzpL-ppAqIhVUBCQrpw=w480-h960-rw",
	},
	storeLinks: {
		apple: "#",
		google: "https://play.google.com/store/apps/details?id=com.naandalist.info_haji",
	} as StoreLinks,
};
