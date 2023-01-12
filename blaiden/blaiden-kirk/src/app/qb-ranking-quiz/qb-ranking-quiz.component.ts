import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-qb-ranking-quiz',
    templateUrl: './qb-ranking-quiz.component.html',
    styleUrls: ['./qb-ranking-quiz.component.scss'],
})

export class QbRankingQuizComponent implements OnInit {

    title = "QB Rankings Quiz";

    names = [
        "Jacoby Brissett",
        "Lamar Jackson",
        "Kenny Pickett",
        "Joe Burrow",
        "Trevor Lawrence",
        "Ryan Tannehill",
        "Matt Ryan",
        "Davis Mills",
        "Josh Allen",
        "Zach Wilson",
        "Mac Jones",
        "Tua Tagovailoa",
        "Patrick Mahomes",
        "Justin Herbert",
        "Russell Wilson",
        "Derek Carr",
        "Aaron Rodgers",
        "Kirk Cousins",
        "Justin Fields",
        "Jared Goff",
        "Baker Mayfield",
        "Marcus Mariota",
        "Tom Brady",
        "Andy Dalton",
        "Dak Prescott",
        "Daniel Jones",
        "Taylor Heinicke",
        "Jalen Hurts",
        "Jimmy Garoppolo",
        "Geno Smith",
        "Matthew Stafford",
        "Kyler Murray"
    ];

    oneTxt = document.querySelector('#one .text') as HTMLElement;
    oneImg = document.querySelector('#one .image') as HTMLImageElement;
    twoTxt = document.querySelector('#two .text') as HTMLElement;
    twoImg = document.querySelector('#two .image') as HTMLImageElement;
    completion = document.querySelector('.progress #completion') as HTMLElement;
    list: any[] = [];
    getOneImg!: string;
    getTwoImg!: string;
    getOneTxt!: string;
    getTwoTxt!: string;
    progressBar!: string;

    // When page loads, run the following...
    ngOnInit(): void {
        this.list = setupQuiz(this.names);
        this.list = this.prepItems(this.list);
        this.nextItems();
    }

    items: any[] = [];

    totalJoin = (() => {
        var arr: number[] = [];
        let total = 0;
        let num = 1;

        for (let i = 0; i < this.names.length; ++i) {
            arr.push(num);
        }

        while (arr.length > 1) {
            let a = arr.pop();
            let b = arr.pop();
            const c = a! + b!;
            total = total + c;
            arr.unshift(c);
        }

        return total;
    })();

    prepItems = (list: any[]): any[] => {
        list = list.map((item: any) => [item]);
        this.items = list.sort((a: any, b: any) => {
            if (Math.random() > 1) {
                return -1;
            } else {
                return 1;
            }
        }).reverse();
        return list;
    };

    listOne: any[] = [];
    listTwo: any[] = [];
    joined: any[] = [];
    joinRunningTotal = 0;

    nextItems = () => {
        const remaining = this.listOne.length + this.listTwo.length;
        let temp = this.listOne;

        // Swap the list every time so items never show in the same location twice in a row
        this.listOne = this.listTwo;
        this.listTwo = temp;

        if (true) {
            this.progressBar =
                Math.min(
                    Math.floor((100 * (this.joinRunningTotal + this.joined.length)) / this.totalJoin),
                    100
                ) + "%";
        }
        // If there are items left in the lists we're sorting, queue them up to get sorted
        if (remaining > 0) {
            if (this.listTwo.length === 0) {
                while (this.listOne.length) {
                    this.joined.push(this.listOne.shift());
                }
                this.items.push(this.joined);
                this.joinRunningTotal += this.joined.length;
                this.nextItems();
                return;
            } else if (this.listOne.length === 0) {
                while (this.listTwo.length) {
                    this.joined.push(this.listTwo.shift());
                }
                this.items.push(this.joined);
                this.joinRunningTotal += this.joined.length;
                this.nextItems();
            } else {
                const e1 = this.listOne[0];
                const e2 = this.listTwo[0];
                if (true) {
                    this.getOneImg = e1.image.toString();
                    this.getOneTxt = e1.name.toString();
                }
                if (true) {
                    this.getTwoImg = e2.image.toString();
                    this.getTwoTxt = e2.name.toString();
                }
                return;
            }
        } else {
            if (this.items.length > 1) {
                this.listOne = this.items.shift();
                this.listTwo = this.items.shift();
                this.joined = [];
                this.nextItems();
                return;
            } else {
                // We're done, we only have one array left, and it's sorted
                const finalList = this.items[0]
                    .reverse()
                    .map((a: any) => a.name)
                    .join('</li><li>');
                let resultsDiv: any;

                resultsDiv = document.getElementById('results');
                resultsDiv.innerHTML = `<li>${finalList}`;
                (document.getElementById('wrapper') as HTMLElement).innerHTML = '';
                (document.getElementById('progress') as HTMLElement).innerHTML = '';

                let type = '';
                const typeQuery = (document.getElementById('stayhot') as HTMLElement).innerHTML;
                if (typeQuery.indexOf('QB') !== -1) type = 'qbRank';
                if (typeQuery.indexOf('NFL') !== -1) type = 'nflTeamRank';
                if (typeQuery.indexOf('NBA') !== -1 && typeQuery.indexOf('All-Time') === -1)
                    type = 'nbaPlayerRank';
                if (
                    typeQuery.indexOf('NBA') !== -1 &&
                    typeQuery.indexOf('All-Time') !== -1
                )
                    type = 'nbaGOATRank';

                const countList = new Map();
            }
        }
    };

    selected = (which: string): void => {
        switch (which) {
            case 'one':
                this.joined.push(this.listTwo.shift());
                break;
            case 'two':
                this.joined.push(this.listOne.shift());
                break;
        }

        this.nextItems();
    };

}


function alph(number: number) {
    var baseChar = ("A").charCodeAt(0),
        letters = "";

    do {
        number -= 1;
        letters = String.fromCharCode(baseChar + (number % 26)) + letters;
        number = (number / 26) >> 0; // quick `floor`
    } while (number > 0);

    return letters;
}

interface ListPlayers {
    name: string;
    image: string;
    k: string;
}

class listReal extends Array implements ListPlayers {
    name: string;
    image: string;
    k: string;

    constructor(name: string, image: string, k: string) {
        super();
        this.name = name;
        this.image = image;
        this.k = k;
    }
}

function setupQuiz(names: Array<string>): Array<Array<string>> {
    let list = new Array<Array<string>>();

    for (let i = 0; i < names.length; i++) {
        let iteration = "00";
        let year = "2022";

        if (names[i] == "Jimmy Garoppolo" ||
            names[i] == "Jameis Winston" ||
            names[i] == "Andy Dalton") year = "2021";
        else if (names[i] == "Dak Prescott" ||
            names[i] == "Marcus Mariota" ||
            names[i] == "Joe Burrow") iteration = "01";
        else if (names[i] == "Daniel Jones") {
            iteration = "05";
            year = "2020"
        } else if (names[i] == "Derek Carr" ||
            names[i] == "Josh Allen" ||
            names[i] == "Davis Mills") iteration = "02";
        else if (names[i] == "Mac Jones") iteration = "05";
        else if (names[i] == "Baker Mayfield") year = "2020";
        else {
            iteration = "00";
            year = "2022";
        }

        const players = new listReal(
            names[i],
            "https://www.pro-football-reference.com/req/20180910/images/headshots/" +
            (names[i].substring(names[i].indexOf(" ") + 1, names[i].indexOf(" ") + 5) +
                names[i].substring(0, 2) + iteration + "_" + year + ".jpg"),
            alph(i + 1));
        list.push(players);
    }
    return list;
}