export type AcfDataType = {
	acf: {
		cena_za_jazdy_dodatkowe_kursantow: number;
		cena_za_jazdy_dodatkowe_kursantow_A: number;
		cena_za_kurs_podstawowy: number;
		cena_za_kurs_podstawowy_automat: number;
		cena_za_kurs_przyspieszony: number;
		cena_za_kurs_przyspieszony_automat: number;
		cena_za_kurs_A: number;
		cena_za_kurs_A1: number;
		cena_za_kurs_A2: number;
		cena_za_kurs_B_A2: number;
		cena_za_kurs_B_A: number;
		cena_zajazdy_dodatkowe_pozostali: number;
		cena_zajazdy_dodatkowe_pozostali_A: number;
		dwie_godziny_na_placu_egzaminacyjnym: number;
		dwie_godziny_na_placu_egzaminacyjnym_A: number;
		poszerzenie_uprawnień_A: number;
		termin_nastepnego_kursu: string;
	};
};
export type DataState = {
	pageData: AcfDataType[];
	loading: boolean;
};
