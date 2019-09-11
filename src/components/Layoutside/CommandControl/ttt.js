@ApiOperation("人员损失报")
@PostMapping("/insertc")
public byte[] insertc(@ApiParam("死亡人数") @RequestParam("death") int death,
                      @ApiParam("受伤人数") @RequestParam("injure") int injure,
                      @ApiParam("损失人数") @RequestParam("loss") int loss,
                      @ApiParam("失踪人数") @RequestParam("miss") int miss,
                      @ApiParam("伤病员人数") @RequestParam("patient") int patient,
                      @ApiParam("被俘人数") @RequestParam("captured") int captured,
                      @ApiParam("备注") @RequestParam("notes") String notes) throws Exception {}

@ApiOperation("物资损失报")
@PostMapping("/materialLoss")
public byte[] materialLoss(@ApiParam("损失数量") @RequestParam("loss") int loss,
                           @ApiParam("物资类型") @RequestParam("material") String material,
                           @ApiParam("注释") @RequestParam("note") String note) throws Exception {}

@ApiOperation("装备损耗报")
@PostMapping("/equipmentLoss")
public byte[] equipmentLoss(@ApiParam("损坏程度") @RequestParam("damage") int damage,
                            @ApiParam("损失数量") @RequestParam("losse") int losse,
                            @ApiParam("装备名称") @RequestParam("name") String name,
                            @ApiParam("消耗数量") @RequestParam("lossa") int lossa,
                            @ApiParam("消耗类型") @RequestParam("type") String type,
                            @ApiParam("注释") @RequestParam("note") String note) throws Exception {}

@ApiOperation("系统设置")
@PostMapping("/sysSettings")
public int SM0217(@ApiParam("技术状态") @RequestParam("technicalState") Integer technicalState,
                  @ApiParam("工作状态") @RequestParam("workState") Integer workState,
                  @ApiParam("经度") @RequestParam("lon") Double lon,
                  @ApiParam("纬度") @RequestParam("lat") Double lat,
                  @ApiParam("高度") @RequestParam("height") Long height
) 