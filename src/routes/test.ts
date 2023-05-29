// 장비

    // 카드
    let cards = [
        { theme: "한 잔의 여유", name: "달콤한 행복"},  
        { theme: "한 잔의 여유", name: "여유로운 휴식"},
        { theme: "한 잔의 여유", name: "다사다난"},
        { theme: "한 잔의 여유", name: "조용한 사색"},
        { theme: "겨울의 추억", name: "한적한 저녁"},
        { theme: "겨울의 추억", name: "천진난만"},
        { theme: "겨울의 추억", name: "겨울맞이"},
        { theme: "겨울의 추억", name: "작은 소망"},
        { theme: "유랑단", name: "잭스페이드"},
        { theme: "유랑단", name: "찰리 존슨"},
        { theme: "유랑단", name: "바네트"},
        { theme: "유랑단", name: "디나 에렌하트"},
        { theme: "사천왕", name: "게라스"},
        { theme: "사천왕", name: "네메시스"},
        { theme: "사천왕", name: "타나토스"},
        { theme: "사천왕", name: "아파테"}
    ];

    let equippedCard1: any;

    let equippedCard2: any;

    let equippedCard3: any;

    let equippedCard4: any;

    

<h2>카드</h2>

<form on:submit>
    <select bind:value={equippedCard1}>
        {#each cards as card}
            <option value={card}>
                [{card.theme}] {card.name}
            </option>
        {/each}
    </select>
</form>

<form on:submit>
    <select bind:value={equippedCard2}>
        {#each cards as card}
            <option value={card}>
                [{card.theme}] {card.name}
            </option>
        {/each}
    </select>
</form>

<form on:submit>
    <select bind:value={equippedCard3}>
        {#each cards as card}
            <option value={card}>
                [{card.theme}] {card.name}
            </option>
        {/each}
    </select>
</form>

<form on:submit>
    <select bind:value={equippedCard4}>
        {#each cards as card}
            <option value={card}>
                [{card.theme}] {card.name}
            </option>
        {/each}
    </select>
</form>