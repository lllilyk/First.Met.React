import React from "react";
import Card from "./Card";

function CardList() {
    return (
        <div>
            <h1>My Favorite Movies</h1>
            <CardList>
                <Card title="클레오의 세계" backgroundColor="#dba2ce">
                    <h3>오늘 보고 싶었던 영화</h3>
                </Card>
                <Card title="사랑은 낙엽을 타고" backgroundColor="#ebcfa2">
                    <h3>메가박스에는 있지도 않어..</h3>
                </Card>
                <Card title="이터널 선샤인" backgroundColor="#95abe8">
                    <h3>에무시네마 함 가 말아</h3>
                    <h3>괴물도 한 번 더 보고 싶음</h3>
                </Card>
            </CardList>
        </div>
    );
}

export default CardList;
