var prompt = require('prompt-sync')();

let id_counter = 1;

const del_tick = []

const tickets = [];

// const tickets = [
//     { id: 101, tripId: 1, passenger: "Jean Dupont", date: "2024-01-15" },
//     { id: 102, tripId: 1, passenger: "Marie Martin", date: "2024-01-15" },
//     { id: 103, tripId: 1, passenger: "Pierre Bernard", date: "2024-01-16" },
//     { id: 104, tripId: 1, passenger: "Sophie Petit", date: "2024-01-16" },
//     { id: 105, tripId: 2, passenger: "Luc Durand", date: "2024-01-15" },
//     { id: 106, tripId: 2, passenger: "Emma Moreau", date: "2024-01-17" },
//     { id: 107, tripId: 3, passenger: "Thomas Laurent", date: "2024-01-15" },
//     { id: 108, tripId: 3, passenger: "Julie Simon", date: "2024-01-18" },
//     { id: 109, tripId: 3, passenger: "Nicolas Michel", date: "2024-01-18" },
//     { id: 110, tripId: 3, passenger: "Camille Garcia", date: "2024-01-19" },
//     { id: 111, tripId: 3, passenger: "Léa David", date: "2024-01-19" },
//     { id: 112, tripId: 4, passenger: "Hugo Bertrand", date: "2024-01-15" },
//     { id: 113, tripId: 5, passenger: "Chloé Roux", date: "2024-01-20" },
//     { id: 114, tripId: 5, passenger: "Maxime Fournier", date: "2024-01-20" },
//     { id: 115, tripId: 5, passenger: "Manon Girard", date: "2024-01-21" }
// ];

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
     
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50

    }
]
function del_tick_from_del_tick(set,id){
    for(let i = 0;i < del_tick.length;i++)
        if (del_tick[i].id == id && del_tick[i].setplace == set )
            del_tick.splice(i,1)
    for(let j = 0 ; j < trips.length ; j++){
        if(trips[j].id == id)
            trips[j].availableSeats -= 1
    }
}
function check_del_seat(id){
    for(let i = 0;i < del_tick.length;i++)
        if (del_tick[i].id == id)
            return del_tick[i].setplace
    return true
}
function add_name(){
    for(;;){
        let name = prompt("Nom du passager : ")
        if (name.length <= 0)
            console.log("tapez le nom correct")
        else if (name.length !== 0)
            return name
    }
}
function id_trip(){
    for(;;){
        let id = Number(prompt("Identifiant du trajet : "))
        if (id <= 20 && id >= 1){
            return id 
        }
    }
}
function input_ticket_id(){
    for(;;){
        let id = Number(prompt("Identifiant du ticket : "))
        if (id <= 1000 && id >= 1){
            return id 
        }
    }
}
function id_trip(){
    for(;;){
        let id = Number(prompt("Identifiant du trajet : "))
        if (id <= 20 && id >= 1){
            return id 
        }
    }
}
function git_seatNumber(obje,id){
    let seatNum = 0
    for(let i = 0 ; i < obje.length ; i++){
        if (obje[i].id == id){
            seatNum = 50 - obje[i].availableSeats + 1
            obje[i].availableSeats -= 1
            return seatNum
        }
    }
}
function git_price(trip ,id){
    let price = 0
    for(let i = 0 ; i < trip.length ; i++){
        if (trip[i].id == id){
            price = trip[i].price
            return price
        }
    }
}
function cheackseat(id_check){
    for(let i = 0 ;i < trips.length;i++){
        if (trips[i].id == id_check)
            if(trips[i].availableSeats <= 0)
                return true
    }
    return false
}
function add_Trajet(id){
    for(let i = 0 ;i < trips.length;i++)
        if (trips[i].id == id){
            return trips[i].departure + " → " + trips[i].destination
        }
}
function Afficher_les_tickets(ticket){
    if (ticket.length == 0){
        console.log("\n===============================");
        console.log("====aucun ticket disponible====");
        console.log("===============================\n");
    }
    else{
        for(let i = 0 ;i < ticket.length;i++)
            Afficher_un_ticket(ticket ,i)    
    }
    
}
function swap(arr,i, j){
    let a = arr[i];
    arr[i] = arr[j];
    arr[j] = a;
}
// =======================================================================
// Afficher les trajets
function Afficher_les_trajets(obje){
    console.log("=== TRAJETS DISPONIBLES ===");
    for(let i = 0 ;i < obje.length ;i++){
        console.log("#",obje[i].id,obje[i].departure ,"→",obje[i].destination )
        console.log("Départ : ",obje[i].departureTime)
        console.log("Arrivée : ",obje[i].arrivalTime)
        console.log("prix : ",obje[i].price)
        console.log("Places disponibles : ",obje[i].availableSeats)
        console.log("==========================");
    }
}
// Afficher les tickets
function Afficher_un_ticket(ticket ,i_of_tick){
    console.log("===============================");
    console.log("Ticket #",ticket[i_of_tick].id);
    console.log("Passager : ",ticket[i_of_tick].passengerName);
    console.log("Trajet :",ticket[i_of_tick].trajet);
    console.log("Place : ",ticket[i_of_tick].seatNumber);
    console.log("Prix : ",ticket[i_of_tick].price);
    console.log("===============================");
}
// Acheter un ticket
function Acheter_un_ticket(){
    let obje = {};
    let name;
    let id_t;
    name = add_name()
    id_t = id_trip()
    if(cheackseat(id_t)){
        console.log("\n===============================");
        console.log("========{train complet}========")
        console.log("===============================\n");
        return 
    }
    obje.id = id_counter++
    obje.passengerName = name
    obje.tripId = id_t
    obje.trajet = add_Trajet(id_t)
    if (check_del_seat(id_t) === true)
        obje.seatNumber =  git_seatNumber(trips,id_t)
    else{
        obje.seatNumber = check_del_seat(id_t)
        del_tick_from_del_tick(obje.seatNumber,id_t)
    }
    obje.price = git_price(trips, id_t)
    tickets.push(obje);
    console.log("\n===============================");
    console.log("===Ticket acheté avec succès===");
    console.log("===============================\n");
    Afficher_un_ticket(tickets , tickets.length - 1)
}
// Annuler un ticket
function Annuler_un_ticket(tick){
    let del_ti = {};
    if(tick.length <= 0 ){
        console.log("===============================");
        console.log("====aucun ticket disponible====");
        console.log("===============================");
        return
    }
    for(;;){
        let id_del = input_ticket_id()
        for(let i = 0 ;i<tick.length;i++){
            if (tick[i].id == id_del){
                Afficher_un_ticket(tick,i);
                del_ti.id = tick[i].tripId
                del_ti.setplace = tick[i].seatNumber
                del_tick.push(del_ti)
                tick.splice(i, 1)
                for(let j = 0 ;j < trips.length;j++){
                    if(trips[j].id == del_ti.id)
                        trips[j].availableSeats += 1
                }
                return
            }
        console.log("===============================");
        console.log("====={ticket n'existe pas}=====");
        console.log("===============================");
        }
    }
}
//  Rechercher un ticket
function Rechercher_un_ticket(tick){
    if(tick.length <= 0 ){
        console.log("===============================");
        console.log("====aucun ticket disponible====");
        console.log("===============================");
        return
    }
    let name_ser = add_name()
    for(let i = 0 ; i <tick.length ; i++){
        if (tick[i].passengerName == name_ser){
            Afficher_un_ticket(tick,i)
        }
    }
    console.log("===============================");
    console.log("====={ticket n'existe pas}=====");
    console.log("===============================");
}
//  Filtrer les trajets
function Filtrer_les_trajets(trip){
    let depar = add_name()
    console.log (depar)
    for(let i = 0 ;i< trip.length ;i++){
        if (trip[i].departure == depar)
            console.log(trip[i].departure ," → ",trip[i].destination ,":", trip[i].price,"DH")            
    }
}
// Trier les trajets
function Trier_les_trajets(traj){
    let teamp_trips = traj
    for (let j = 0 ;j < teamp_trips.length;j++){
        for(let i = 0 ;i < teamp_trips.length - 1 ;i++)
            if (teamp_trips[i].price > teamp_trips[i + 1].price)
                swap(teamp_trips ,i ,i + 1)
    }
    Afficher_les_tickets(teamp_trips);
}
// =======================================================================
// Chiffre d'affaires total
function affaires_total(tick){
    let = total = 0;
    for(let i = 0;i<tick.length;i++)
        total += tick[i].price
    console.log(total)
}
// Trajet le plus vendu
function Trajet_le_plus_vendu(){
    if(tickets.length <= 0 ){
        console.log("===============================");
        console.log("====aucun ticket disponible====");
        console.log("===============================");
        return
    }
    let max = {
        number : 0,
        index : ''
    };
    let counter = 0;
    for(let i = 0 ; i < trips.length ;i++){
        counter = 0;
        for(let j = 0;j < tickets.length;j++){
            if (trips[i].id == tickets[j].tripId)
                counter++;
        }        
        if (max.number < counter){
            max.number = counter 
            max.index = (trips[i].departure + " → " + trips[i].destination)
        }
    }
    console.log(max.index)
    console.log(max.number ,"tickets vendus")
}
//  Menu principal
function main() {
    let n;
    do {
        console.log("===============================");
        console.log(" =======RAILWAY MANAGER=======");
        console.log("===============================");
        console.log("1. Afficher les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        console.log("8. Nombre total de tickets vendus");
        console.log("9. Chiffre d'affaires total");
        console.log("10. Trajet le plus vendu");
        console.log("0. Quitter");
        console.log("===============================");

        n = Number(prompt("Votre choix :"))
        if (n == 0)
            return console.log("\n===============================\n==========={Quitter}===========\n===============================")
        switch (n) {
            case 1:
                Afficher_les_trajets(trips)
                break;
            case 2:
                Acheter_un_ticket()
                break;
            case 3:
                Afficher_les_tickets(tickets)
                break;
            case 4:
                Annuler_un_ticket(tickets)
                break;
            case 5:
                Rechercher_un_ticket(tickets)
                break;
            case 6: 
                Filtrer_les_trajets(trips)
                break;
            case 7:
                Trier_les_trajets(trips)
                Afficher_les_trajets(trips)
                break;
            case 8:
                console.log(tickets.length)
                break
            case 9:
                affaires_total(tickets)
                break
            case 10:
                Trajet_le_plus_vendu()
                break
            default:
                console.log("Votre reposne n'etait pas acceptable, Svp donne moi une valeur entre 1 et 10");
                break;
        }
    } while (n!=0)
}

main()
