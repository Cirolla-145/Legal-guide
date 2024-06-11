import React from 'react'
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    main: {
        textAlign: 'center',
        margin: '0 auto',
    },
    container: {
        maxWidth: 600,
        border: '2px ',
        margin: '0 auto',
        padding: 20,
        textAlign: 'left',
    },
    card: {
        padding: 3,
        marginBottom: 10,
    },
    footer: {
        marginTop: 20,
    },
    block1: {
        width: '48%',
        paddingTop: 20,
        paddingLeft: 25,
        paddingRight: 50,
        boxSizing: 'border-box',
        display: 'inline-block',
        verticalAlign: 'top',
    },
    block2: {
        width: '48%',
        paddingTop: 20,
        paddingLeft: 40,
        boxSizing: 'border-box',
        display: 'inline-block',
        verticalAlign: 'top',
    },
});

const Hello = () => (

    <Document>
        <Page style={styles.main}>
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', fontSize: 24 }}>GIFT DEED</Text>
                <View style={styles.card}>
                    <Text>This deed of gift made thisdayDay ofmonth(month)year(year) between;</Text>
                </View>
                <View style={styles.card}>
                    <Text>Mr.donor, Age donorAge years,</Text>
                    <Text>Resident of donorAdd</Text>
                    <Text>(Hereinafter called the “Donor”) of the One part</Text>
                </View>
                <View style={styles.card}>
                    <Text>And,</Text>
                </View>
                <View style={styles.card}>
                    <Text>Mr/Miss donee, AgedoneeAgeyears,</Text>
                    <Text>Resident ofdoneeAdd</Text>
                    <Text>(Hereinafter called the “Donee”) of the Other part</Text>
                </View>
                <View style={styles.card}>
                    <Text>Witnesseth as follows:</Text>
                </View>
                <View style={styles.card}>
                    <Text>In consideration of natural love and affection being the son/daughter of Donor, the donor hereby assigns to the donee a sum of Rs.amountto be held by the donee absolutely.</Text>
                </View>
                <View style={styles.card}>
                    <Text>The possession of the Rs.amountvide cheque No.chequeNoDrawn on, _____________ Branch dated _/_/__ hereinabove donated unto the donee and has been physically handed over to the donee as absolute owner before execution of this Gift Deed.</Text>
                </View>
                <View style={styles.card}>
                    <Text>The said gift of Rs.amounthas been accepted by Mr/Miss ___________________________.</Text>
                </View>
                <View style={styles.card}>
                    <Text>The donor from this date reserves no right or interest on the said sum hereby gifted which shall from this day be the sole and exclusive property of the donee.</Text>
                </View>
                <View style={styles.card}>
                    <Text>The property hereby gifted is the donor’s self-acquired property accumulated out of income earned and has full right and authority to dispose of the same in any manner he may think fit.</Text>
                </View>
                <View style={styles.card}>
                    <Text>In witness whereof, the parties hereto have put their respective signatures on this deed of gift in presence of witnesses.</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.block1}>
                        <Text>SIGNATURE, NAME AND ADDRESS OF THE WITNESS</Text>
                        <Text>________________________</Text>
                        <Text>________________________</Text>
                        <Text>________________________</Text>
                        <Text>________________________</Text>
                    </View>
                    <View style={styles.block2}>
                        <Text>Donor</Text>
                        <Text>________________________</Text>
                        <Text>donor</Text>
                        <Text>________________________</Text>
                        <Text>________________________</Text>
                        <Text>________________________</Text>
                        <Text>________________________</Text>
                        <Text>donor</Text>
                    </View>
                </View>
            </View>
        </Page>
    </Document>

)
export default Hello







