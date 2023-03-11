import { EUHouseBuilder, USHouseBuilder } from "./implementation";

const americanHouseBuilder = new USHouseBuilder();
americanHouseBuilder.build();
// Building floor with concrete
// Building walls with plywood
// Building windows with single glass
// Building roof with asphalt shingles

const europeanHouseBuilder = new EUHouseBuilder();
europeanHouseBuilder.build();
// Building floor with concrete
// Building walls with bricks
// Building windows with double glass
// Building roof with clay shingles
