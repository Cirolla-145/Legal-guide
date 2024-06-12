const pdfTemplate = ({ day, month, year, donor, donorAge, donorAdd, donee, doneeAge, doneeAdd, amount, chequeNo, date }) => {
    const today = new Date();
    return `
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Document</title>

    <style>
        .main {
            text-align: center;
            margin: 0 auto;
        }
        .container {
            max-width: 600px;
            border: 2px solid black;
            margin: 0 auto;
            padding: 20px;
            text-align: left;
        }
        .card {
            padding: 3px;
            margin-bottom: 10px;
        }
        .footer {
            margin-top: 20px;
        }
        .block1, .block2 {
            width: 48%;
            padding-top: 20px;
            box-sizing: border-box;
            display: inline-block;
            vertical-align: top;
        }
        .block1 {
            padding-left: 25px;
            padding-right: 50px;
        }
        .block2 {
            padding-left: 40px;
        }
    </style>

</head>

<body>
    <div class="main">
        <div class="container">
            <h1>GIFT DEED</h1>
            <div class="body">
                <div class="card card1">
                    <p>
                        This deed of gift made this ${day} Day of ${month} (month) ${year} (year) between;
                    </p>
                </div>
                <div class="card card2">
                    <p>
                        Mr. ${donor}, Age ${donorAge} years,
                    </p>
                    <p>
                        Resident of ${donorAdd}
                    </p>
                    <p>
                        (Hereinafter called the “Donor”) of the One part
                    </p>
                </div>
                <div class="card card3">
                    <p>
                        And,
                    </p>
                </div>
                <div class="card card3">
                    <p>
                        Mr. ${donee}, Age ${doneeAge} years,
                    </p>
                    <p>
                        Resident of ${doneeAdd}
                    </p>
                    <p>
                        (Hereinafter called the “Donee”) of the Other part
                    </p>
                </div>
                <div class="card card4">
                    <p>
                        Witnesseth as follows:
                    </p>
                </div>
                <div class="card card5">
                    <div class="point">
                        <p>
                            In consideration of natural love and affection being the son/daughter of Donor, the donor
                            hereby
                            assigns to the donee a sum of Rs. ${amount} to be held by the donee absolutely.
                        </p>
                    </div>
                    <div class="point">
                        <p>
                            The possession of the Rs. ${amount} vide cheque No. ${chequeNo} Drawn on
                            ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}  herein above donated unto the donee
                            and
                            has
                            been physically handed over to the donee as absolute owner before execution of this Gift
                            Deed.
                        </p>
                    </div>
                    <div class="point">
                        <p>
                            The said gift of Rs. ${amount} has been accepted by Mr/Miss
                            ${donee}.
                        </p>
                    </div>
                    <div class="point">
                        <p>
                            The donor from this date reserves no right or interest on the said sum hereby gifted which
                            shall
                            from this day be the sole and exclusive property of the donee.
                        </p>
                    </div>
                    <div class="point">
                        <p>
                            The property hereby gifted is the donor’s self-acquired property accumulated out of income
                            earned and has full right and authority to dispose of the same in any manner he may think
                            fit.
                        </p>
                    </div>
                </div>
                <div class="card card6">
                    <p>In witness whereof, the parties hereto have put their respective signatures on this deed of gift
                        in
                        presence of witnesses.</p>
                </div>
            </div>
            <div class="footer">
                <div class="block1">
                    <p>SIGNATURE NAME AND ADDRESS OF THE WITNESS</p>
                </div>
                <div class="block2">
                    <p><u></u> DONOR</p>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
    `;
};

export default pdfTemplate;
