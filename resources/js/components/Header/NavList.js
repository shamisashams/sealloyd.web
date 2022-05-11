export const navList = [
    {
        name: "მთავარი",
        link: route('client.home.index'),
    },
    {
        name: "ჩვენ შესახებ",
        link: "",
        dropdown: [
            {
                name: "მიზნები",
                link: route('client.aboutus.purpose'),
            },
            {
                name: "ეთიკის კოდექსი",
                link: route('client.aboutus.ethics'),
            },
            {
                name: "პოლიტიკა",
                link: route('client.aboutus.politics'),
            },
            {
                name: "ხარისხის მენეჯმენტის სისტემა",
                link: route('client.aboutus.management'),
            },
            {
                name: "დროშის აღიარებები",
                link: route('client.aboutus.recognition'),
            },
        ],
    },
    {
        name: "სერვისი",
        link: "",
        dropdown: [
            {
                name: "გემების კლასიფიკაცია",
                link: route("client.services.index"),
            },
            {
                name: "სტატუტორი",
                link: route("client.services.stators"),
            },
            {
                name: "მანუალების დამოწმება",
                link: route("client.services.certifications"),
            },
            {
                name: "კომპანიების აღიარება",
                link: route("client.services.comprecognition"),
            },
        ],
    },
    {
        name: "დოკუმენტაცია",
        link: "",
        dropdown: [
            {
                name: "გემთმფლობელის აპლიკაცია",
                link: route('client.services.ownerapplication'),
            },
            {
                name: "მომსახურების შეფასება",
                link: route('client.services.evaluation'),
            },
            {
                name: "ცირკულარები",
                link: route('client.services.circulars'),
            },
        ],
    },
    {
        name: "ჩვენი გუნდი",
        link: "",
        dropdown: [
            {
                name: "ბათუმის სათაო ოფისი",
                link: route('client.services.office'),
            },
            {
                name: "აღიარებული ინსპექტორები",
                link: route('client.services.inspectors'),
            },
            {
                name: "კარიერა",
                link: route('client.services.career'),
            },
        ],
    },
    {
        name: "კონტაქტი",
        link: route('client.contact.index'),
    },
];
